import { FC, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react"
import useSWR from "swr"
import {useForm, useWatch} from 'react-hook-form'

export const SelectInputSection: FC = () =>  {
  const {data} = useSWR("/api/v1/prefectures")
  console.log(data.result);
  return(
    <>
      <p>
        SelectInputSection
      </p>

      {data.result.map((item: any, index: any) => {
        return (
          <div key={index}>
            <label>{item.prefName}
              <input type="checkbox" id={item.prefCode}/>
            </label>
          </div>
        )
        })}
    </>
  )
}
