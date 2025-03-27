import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronUp } from "lucide-react";
import LabelCalendar from "../calendar/LabelCalendar";
import MarkdownDialog from "../dialog/MarkdownDialog";

const BasicBoard = () => {
  return (
    <div className="flex flex-col items-center w-full p-5 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center flex-1 gap-[8px]">
          <Checkbox className="w-5 h-5" />
          <span className="w-full font-medium text-[24px] text-[#454545] placeholder:font-medium placeholder:text-[#bdbdbd]">
            보드 제목을 입력해주세요.
          </span>
        </div>
        <Button variant={"ghost"}>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
      <div className="flex items-center justify-between w-full mt-6 mb-[14px]">
        <div className="flex items-center gap-[16px]">
          <LabelCalendar label="시작일" />
          <LabelCalendar label="종료일" />
        </div>
        <div className="buttonBox">
          <Button
            variant={"ghost"}
            className="font-normal text-gray-400 hover:bg-green-50 hover:text-green-500"
          >
            Duplicate
          </Button>
          <Button
            variant={"ghost"}
            className="font-normal text-gray-400 hover:bg-red-50 hover:text-red-500"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-[14px] border-t border-[#bdbdbd]">
        <MarkdownDialog />
      </div>
    </div>
  );
};

export default BasicBoard;
