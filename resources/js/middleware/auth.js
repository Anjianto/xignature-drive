
import { events } from "@/bus";


export default function auth({ next, router }) {
  const urlParams = new URLSearchParams(window.location.search);
  const preReg = urlParams.get("create_signature") || false;
  if (preReg) {
      setTimeout(() => {
        events.$emit("alert:open", {
            emoji: "🤔",
            title: "Signature Empty",
            message: "Please fill profile to sign document.",
            type: "info",
          });
        }, 1000);
    }
    return next();
}