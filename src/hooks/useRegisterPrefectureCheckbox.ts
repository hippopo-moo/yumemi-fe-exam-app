import useSWR from "swr"
import swr from "swr"

/** 
 * 全都道府県をAPIで取得し、チェックボックスに必要な値を返却する
 * 
*/
export const useRegisterPrefectureCheckbox = () => {
  const {data, error} = useSWR("/api/v1/prefectures")
  console.log(data)
}
