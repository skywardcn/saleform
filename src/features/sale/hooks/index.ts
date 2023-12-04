import { useCallback, useState } from "react"

export const useSaleOrderHook = () => {
    const [toggle, setToggle] = useState(false)
    const [info, setInfo] = useState({
        companyName: "\u6b66\u6c49\u901f\u6613\u8054\u667a\u80fd\u88c5\u5907\u6709\u9650\u516c\u53f8",
        signingPlace: "\u6b66\u6c49",
        brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
        companyBankAddress: "\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u6b66\u6c49\u73de\u72ee\u8def\u652f\u884c",
        unitAddress2: "\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u73de\u5357\u8857\u6b66\u73de\u8def717\u53f7\u5146\u5bcc\u56fd\u9645\u5927\u53a61\u680b4\u5c425\u30017\u30018\u30019\u5ba4 (\u4eba\u8109\u4f17\u521b\u7a7a\u95f4583\u53f7)",
        companyAccount: "42050112718900000862",
        companyTax: "91420111MACPDGU74P",
        seal: "https://jiqin-online-mall.oss-cn-beijing.aliyuncs.com/2023_07_29/wEn87N26_1010657_system_%E5%90%88%E5%90%8C%E7%AB%A0.png"
    })

    const changeInfo = useCallback(() => {
        setInfo(toggle ? {
            companyName: "\u798f\u5dde\u901f\u6613\u8054\u7535\u6c14\u6709\u9650\u516c\u53f8",
            signingPlace: "\u798f\u5dde",
            brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
            companyBankAddress: "\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u798f\u5dde\u4e1c\u5357\u6c7d\u8f66\u57ce\u652f\u884c",
            unitAddress2: "\u798f\u5efa\u7701\u798f\u5dde\u5e02\u95fd\u4faf\u53bf\u9752\u53e3\u9547\u9752\u56d7\u6295\u8d44\u533a\u767d\u6c34\u8def37\u53f7",
            companyAccount: "35050161663800001149",
            companyTax: "91350121MA3443YK64",
            seal: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/f7BAwnHp_105573_system_%E5%90%88%E5%90%8C%E7%AB%A0.png"
        } : {
            companyName: "\u6b66\u6c49\u901f\u6613\u8054\u667a\u80fd\u88c5\u5907\u6709\u9650\u516c\u53f8",
            signingPlace: "\u6b66\u6c49",
            brandImg: "https://trade-erp.oss-cn-beijing.aliyuncs.com/2020_11_02/CXdpWCdk_67528_system_ERP%E5%B0%BA%E5%AF%B8.png",
            companyBankAddress: "\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c\u80a1\u4efd\u6709\u9650\u516c\u53f8\u6b66\u6c49\u73de\u72ee\u8def\u652f\u884c",
            unitAddress2: "\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u73de\u5357\u8857\u6b66\u73de\u8def717\u53f7\u5146\u5bcc\u56fd\u9645\u5927\u53a61\u680b4\u5c425\u30017\u30018\u30019\u5ba4 (\u4eba\u8109\u4f17\u521b\u7a7a\u95f4583\u53f7)",
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