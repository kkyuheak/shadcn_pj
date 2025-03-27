"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LabelCalendar from "../calendar/LabelCalendar";
import { DialogClose } from "@radix-ui/react-dialog";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const MarkdownDialog = () => {
  const [contents, setContents] = useState<string | undefined>(
    "**Hello world!!!**"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="font-normal text-gray-400 hover:text-gray-500 cursor-pointer">
          컨텐츠를 추가하세요.
        </span>
      </DialogTrigger>
      <DialogContent className="min-w-fit">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center justify-start gap-2 w-[45vw]">
              <Checkbox className="w-5 h-5" />
              <input
                type="text"
                placeholder="제목을 작성하세요"
                className="w-full border-none outline-none font-normal text-[24px] text-[#303030] placeholder:font-normal placeholder:text-[#bdbdbd]"
              />
            </div>
          </DialogTitle>
          <div
            className="flex items-center w-[45vw] gap-4 pt-4
          "
          >
            <LabelCalendar label="시작일" />
            <LabelCalendar label="종료일" />
          </div>
          <div className="w-full border-t border-gray-600"></div>
          <div className="w-[45vw] h-[50vh]">
            <MDEditor
              height={100 + "%"}
              value={contents}
              onChange={setContents}
            />
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className="flex items-center justify-end w-[45vw] gap-4 pt-3">
            <DialogClose asChild>
              <button className="cursor-pointer py-2 px-4 rounded-lg font-normal text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                취소
              </button>
            </DialogClose>
            <button
              type="submit"
              className="cursor-pointer font-normal py-2 px-4 rounded-lg border-orange-500 bg-orange-400  text-white hover:bg-orange-300 hover:text-white"
            >
              등록
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MarkdownDialog;
