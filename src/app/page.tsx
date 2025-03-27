"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.container__onBoarding}>
        <span className={styles.container__onBoarding__title}>시작하기</span>
        <div className={styles.container__onBoarding__steps}>
          <span>1. Create a page</span>
          <span>2. Add boards to page</span>
        </div>
        {/* 페이지 추가 버튼 */}
        <Button
          variant={"outline"}
          className="w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500 cursor-pointer"
          onClick={() => router.push("/create")}
        >
          새 페이지 만들기
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
