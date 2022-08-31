import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../../../shared/contexts/api.provider";
import { EpicModel } from "../../../shared/models/epic.model";

function useEpicDetails() {
  const api = useApi().epicApi;

  const [searchParams] = useSearchParams();
  const [epic, setEpic] = useState<EpicModel | null>(null);

  const epicId = +(searchParams && searchParams.get("id") || 0);
  console.log("epicId", epicId);

  useEffect(() => {
    if (!epicId) return;

    (async () => {
      const res = await api.Details(epicId);
      setEpic(new EpicModel(res));
    })();
  }, [epicId, api]);

  return epic;
}

export default useEpicDetails;
