export interface recipes {
  recipes: recipeInterface[],
}


interface digest{
label: string
total: number


}

export interface recipeInterface {
  recipe: {
    calories : number
    label:string
    image:string
    cuisineType: Array<string>
    digest: Array<digest>
    healthLabels: Array<string>
  }

}
