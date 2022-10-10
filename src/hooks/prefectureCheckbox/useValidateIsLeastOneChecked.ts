import { useMemo } from "react"
import { usePrefectureCheckboxFormContext } from "src/hooks/prefectureCheckbox"

/**
 * 最低１つはチェックが入っているかのバリデーションチェック
 * @returns 
 * 
 */
export const useValidateIsLeastOneChecked = () => {
  const { watch } = usePrefectureCheckboxFormContext()
  const formValues = watch() // 引数なしの場合は全nameの値を取得して監視
  return useMemo(() => {
    return (
      formValues.prefectures.length !== 0 &&
      formValues.prefectures.some(({ selected }) => selected)
    )
  }, [formValues])
}
