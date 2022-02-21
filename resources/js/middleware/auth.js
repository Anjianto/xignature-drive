
import { events } from "@/bus";


export default function auth({ next, router }) {
    const preReg = router.query["create_signature"] || false;
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