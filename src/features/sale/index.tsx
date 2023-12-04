import { useSaleOrderHook } from "features/sale/hooks"

export const CompChange = () => {
    const { changeInfo } = useSaleOrderHook()
    return (<>
        <button className="layui-btn layui-btn-normal layui-btn-radius" onClick={changeInfo}></button>
    </>)
}