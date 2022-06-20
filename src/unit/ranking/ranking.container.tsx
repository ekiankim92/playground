import { useEffect, useState } from "react";
import axios from "axios";
import RankingUI from "./ranking.presenter";
import { useRouter } from "next/router";

export default function Ranking() {
  const [rankList, setRankList] = useState([]);
  const [newList, setNewList] = useState([]);
  const router = useRouter();

  const onClickDetailedSuzy = () => {
    console.log("router.query.id:", router.query.id);
    router.push("/ranking-detail/1");
  };

  const onClickDetailedIU = () => {
    console.log("router.query.id:", router.query.id);
    router.push("/ranking-detail/2");
  };

  const onClickDetail = (id: string) => () => {
    router.push(`/ranking-detail/${id}`);
    sessionStorage.setItem("url", `window.location.hostname/${id}`);
    console.log("result:", sessionStorage.getItem("url"));
  };

  useEffect(() => {
    console.log("rankList:", rankList);
    try {
      const rankingData = async () => {
        const result = await axios.get("http://localhost:3001/rank");
        result.data.sort((a, b) => a.ranking - b.ranking);
        setRankList(result.data);
      };
      rankingData();
    } catch (error) {
      console.log("error:", error.message);
    }
  }, []);

  useEffect(() => {
    console.log("host:", window.location.host);
    console.log("typeof:", typeof window.location.host);
  }, []);

  useEffect(() => {
    const rankingOrder = () => {
      const listOrder = rankList.sort((a, b) => a.ranking - b.ranking);
      console.log("listOrder:", listOrder);
      setNewList(listOrder);
    };
    rankingOrder();
  }, []);

  return (
    <RankingUI
      rankList={rankList}
      newList={newList}
      onClickDetailedSuzy={onClickDetailedSuzy}
      onClickDetailedIU={onClickDetailedIU}
      onClickDetail={onClickDetail}
    />
  );
}
