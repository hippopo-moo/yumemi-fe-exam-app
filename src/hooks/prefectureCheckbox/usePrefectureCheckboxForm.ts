import { useForm } from "react-hook-form"

// この戻り値はindex.tsxでFormProviderに渡されている
export const usePrefectureCheckboxForm = () => {
  const methods = useForm<PrefectureCheckboxesForm>({
    mode: "onChange", //初回のバリデーションの実行タイミングを設定
    defaultValues: { prefectures: [] }, // 初期値をオブジェクトで入力。resetでこの値に戻る。
  })

  return {
    methods,
  }
}
