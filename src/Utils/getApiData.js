const getAllData =async()=>{
    let category=await fetch('https://openapi.programming-hero.com/api/quiz')
    let categoriesData = await category.json()
    categoriesData = categoriesData.data
    return {categoriesData}
}

export default getAllData
