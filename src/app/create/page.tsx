import LabelCalendar from "@/components/common/calendar/LabelCalendar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const CreatePage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-[920px] h-screen border-r border-[#e6e6e6] bg-[#f9f9f9]">
      <header className="flex flex-col items-start justify-end bg-white w-full">
        <div className="flex flex-col w-full py-5 px-[28px] mt-[28px]">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="text-[36px] font-bold outline-none placeholder:text-[#c4c4c4]"
          />
          <div className="flex items-center justify-start gap-[16px] mt-2 mb-4">
            <span className="text-[#6d6d6d]">0/10 completed</span>
            <Progress
              value={30}
              className="w-[30%] h-2"
              indicatorColor="bg-green-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <LabelCalendar label="시작일" />
              <LabelCalendar label="종료일" />
            </div>
            <Button
              variant={"outline"}
              className="w-[15%] border-orange-500 bg-orange-400 text-white hover:bg-orange-300 hover:text-white cursor-pointer"
            >
              새 보드 추가하기
            </Button>
          </div>
        </div>
      </header>
      <main className="flex items-center justify-center w-full h-[calc(100%-250px)] py-[28px] px-4">
        <div className="flex flex-col items-center">
          <span className="text-[24px] font-bold text-[#454545]">
            There is no Board yet.
          </span>
          <span className="mt-[14px] mb-[28px] text-[18px] text-[#454545]">
            Click the button and Start flashing!
          </span>
          <button className="flex items-center justify-center w-[74px] h-[74px] outline-none border-none cursor-pointer">
            +
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreatePage;
