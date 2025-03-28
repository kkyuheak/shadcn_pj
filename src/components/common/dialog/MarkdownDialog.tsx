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
import { toast } from "sonner";
import { supabase } from "@/utils/supabase";

const MarkdownDialog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string | undefined>(
    "**Hello world!!!**"
  );

  const onSubmit = async () => {
    if (!title.trim().length || !content?.trim().length) {
      toast.error("제목과 내용을 입력해주세요.");
      return;
    }
    console.log("title", title);
    console.log("content", content);

    const { data, error, status } = await supabase
      .from("todos")
      .insert([{ title, content }])
      .select();

    if (error) {
      console.log(error);
      toast.error("에러가 발생했습니다.");
    }

    if (status === 201) {
      toast.success("성공적으로 등록되었습니다.");
      setTitle("");
      setContent("**Hello world!!!**");
    }

    console.log(data);
  };

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              onChange={setContent}
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
              onClick={onSubmit}
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
