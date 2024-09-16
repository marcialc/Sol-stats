import { BsFillChatDotsFill } from "react-icons/bs";
import Modal from "@/components/Modal";
import CommentWrapper from "@/components/CommentWrapper";

const CommentSection = () => {
  return (
    <>
      <span className="max-xl:hidden block">
        <CommentWrapper />
      </span>
      <span className="max-xl:block hidden fixed bottom-4 right-4">
        <Modal buttonContent={<BsFillChatDotsFill size={25} />}>
          <CommentWrapper />
        </Modal>
      </span>
    </>
  );
};

export default CommentSection;
