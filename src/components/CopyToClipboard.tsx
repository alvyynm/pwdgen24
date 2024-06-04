import { IoMdCopy } from "react-icons/io";

function CopyButton({ text }: { text: string }) {
  const CopyToClipboard = async (clipBoardText: string) => {
    await navigator.clipboard.writeText(clipBoardText);
  };
  return (
    <>
      <button onClick={() => CopyToClipboard(text)}>
        <IoMdCopy className="text-[#a4ffaf] hover:text-white text-3xl" />
      </button>
    </>
  );
}

export default CopyButton;
