import { useEffect, useMemo } from "react"
import useSWR from "swr"
import { usePrefectureCheckboxFormContext } from "."

/*
　全都道府県をAPIで取得し、チェックボックスを作成する

*/
export const useRegisterPrefectureCheckbox = () => {
  const { data } = useSWR<ResasAPIPrefecturesResponse>("/api/v1/prefectures")
  const { register, setValue } = usePrefectureCheckboxFormContext()

  const prefectureChecboxes = useMemo(() => {
    if (typeof data === "object" && "result" in data) {
      console.log(data);
      return {
        prefectures: data.result.map((value) => {
          return { ...value, selected: false }
        }),
      }
    }
    return { prefectures: [] }
  }, [data])

  useEffect(() => {
    prefectureChecboxes.prefectures.forEach((value, index) => {
      setValue(`prefectures.${index}`, value)
    })
  }, [prefectureChecboxes, setValue])

  return {
    prefectureChecboxes,
    register,
  }
}
