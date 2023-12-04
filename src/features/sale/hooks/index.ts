import { useCallback, useState } from "react"

export const useSaleOrderHook = () => {
    const [toggle, setToggle] = useState(false)
    const [info, setInfo] = useState({
        companyName: "武汉速易联智能装备有限公司",
        signingPlace: "武汉",
        brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
        companyBankAddress: "中国建设银行股份有限公司武汉珞狮路支行",
        unitAddress2: "湖北省武汉市洪山区珞南街武珞路717号兆富国际大厦1栋4层5、7、8、9室 (人脉众创空间583号)",
        companyAccount: "42050112718900000862",
        companyTax: "91420111MACPDGU74P",
        seal: "https://jiqin-online-mall.oss-cn-beijing.aliyuncs.com/2023_07_29/wEn87N26_1010657_system_%E5%90%88%E5%90%8C%E7%AB%A0.png"
    })

    const changeInfo = useCallback(() => {
        setInfo(toggle ? {
            companyName: "福州速易联电气有限公司",
            signingPlace: "福州",
            brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
            companyBankAddress: "中国建设银行股份有限公司福州东南汽车城支行",
            unitAddress2: "福建省福州市闽侯县青口镇青囗投资区白水路37号",
            companyAccount: "35050161663800001149",
            companyTax: "91350121MA3443YK64",
            seal: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/f7BAwnHp_105573_system_%E5%90%88%E5%90%8C%E7%AB%A0.png"
        } : {
            companyName: "武汉速易联智能装备有限公司",
            signingPlace: "武汉",
            brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
            companyBankAddress: "中国建设银行股份有限公司武汉珞狮路支行",
            unitAddress2: "湖北省武汉市洪山区珞南街武珞路717号兆富国际大厦1栋4层5、7、8、9室 (人脉众创空间583号)",
            companyAccount: "42050112718900000862",
            companyTax: "91420111MACPDGU74P",
            seal: "https://jiqin-online-mall.oss-cn-beijing.aliyuncs.com/2023_07_29/wEn87N26_1010657_system_%E5%90%88%E5%90%8C%E7%AB%A0.png"
        })
        // const unitName = document.getElementById("unitName")!
        const title_comp_name = document.querySelector("span#unitName")!
        const signingPlace = document.querySelector("span#signingPlace")!
        // let table_comp_name=document.querySelector("td#unitName2")!
        const companyBankAddress = document.querySelector("td#unitBank")!
        const companyAccount = document.querySelector("td#unitAccount")!
        const companyTax = document.querySelector("td#unitTax")!
        const unitAddress2 = document.querySelector("#unitAddress2")!
        const sealImage = document.querySelector("img#sealImage")!
        const logoImage = document.querySelector("#logoImage")! as HTMLImageElement

        title_comp_name.innerHTML = info.companyName
        signingPlace.innerHTML = info.signingPlace
        logoImage.src = info.brandImg
        companyBankAddress.innerHTML = info.companyBankAddress
        unitAddress2.innerHTML = info.unitAddress2
        companyAccount.innerHTML = info.companyAccount
        companyTax.innerHTML = info.companyTax
        sealImage.setAttribute("src", info.seal)
        setToggle(!toggle)
    }, [info])

    return { info, changeInfo }
}