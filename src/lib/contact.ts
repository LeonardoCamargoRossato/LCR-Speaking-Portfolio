export type Inquiry = { name?:string; organization?:string; email?:string; eventType?:string; theme?:string; date?:string; message?:string };
export const contactEmail = "leo.c.rossato@gmail.com";
export function buildInquiryMailto(data:Inquiry = {}) {
const lines = ["Olá, Leonardo!","","Gostaria de conversar sobre uma apresentação.","",
"Nome: " + (data.name || "A informar"), "Empresa / instituição: " + (data.organization || "A informar"),
"E-mail: " + (data.email || "A informar"),"Tipo de evento: " + (data.eventType || "A definir"),
"Tema de interesse: " + (data.theme || "A definir"),"Data prevista: " + (data.date || "A definir"),
"","Mensagem:",data.message || "Gostaria de solicitar informações sobre disponibilidade e formatos."];
return "mailto:" + contactEmail + "?subject=" + encodeURIComponent("Solicitação de palestra — " + (data.theme || "LCR Speaking Portfolio")) + "&body=" + encodeURIComponent(lines.join("\n"));
}
export const speakerKitMailto = "mailto:" + contactEmail + "?subject=" + encodeURIComponent("Solicitação de Speaker Kit — Leonardo Camargo Rossato") + "&body=" + encodeURIComponent("Olá, Leonardo! Gostaria de receber seu Speaker Kit para nosso evento.");