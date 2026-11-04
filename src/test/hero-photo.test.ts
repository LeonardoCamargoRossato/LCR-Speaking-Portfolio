import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function jpegDimensions(bytes: Buffer) {
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error("Imagem JPEG inválida");
  let i = 2;
  const frameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  while (i < bytes.length) {
    if (bytes[i++] !== 0xff) continue;
    while (bytes[i] === 0xff) i++;
    const marker = bytes[i++];
    if (marker === 0xd8 || marker === 0x01) continue;
    if (marker === 0xd9 || marker === 0xda) break;
    const length = bytes.readUInt16BE(i);
    if (frameMarkers.has(marker)) return { width: bytes.readUInt16BE(i + 5), height: bytes.readUInt16BE(i + 3) };
    i += length;
  }
  throw new Error("Dimensões JPEG não encontradas");
}
describe("hero-stage — visual hotfix / performance audit", () => {
  it("usa uma fotografia JPEG válida, legível e menos pesada que a antiga hero", () => {
    const stage = readFileSync(resolve(process.cwd(), "src/assets/hero-stage.jpg"));
    const original = readFileSync(resolve(process.cwd(), "src/assets/hero-speaking.jpg"));
    const { width, height } = jpegDimensions(stage);
    console.info(`[Hero photo] ${width}x${height} · ${(stage.length / 1024 / 1024).toFixed(2)} MiB (anterior: ${(original.length / 1024 / 1024).toFixed(2)} MiB)`);
    expect(width).toBeGreaterThanOrEqual(800);
    expect(height).toBeGreaterThanOrEqual(400);
    expect(stage.byteLength).toBeLessThan(original.byteLength);
  });
});