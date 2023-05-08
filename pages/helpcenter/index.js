import FormHelp from "@/components/UI/help/Form";
import Info from "@/components/UI/help/Info";

export default function HelpCenter() {
  return (
    <>
      <FormHelp />
      <div style={{ background: "#eee" }}>
        <Info />
      </div>
    </>
  );
}
