import { ObjectId } from 'mongoose'

interface FieldTypePropertyReview {
    message: string
    rating: number,
    userId: ObjectId,
}

interface FieldTypeProperty {
    title: string,
    images?: string[],
    price: number,
    description?: string,
}

interface FieldTypePropertyUpdate {
    title?: string,
    images?: string[],
    price?: number,
    description?: string,
}

interface FieldTypePropertyMain extends FieldTypeProperty {
    _id: ObjectId,
    userId: ObjectId,
    deleted: boolean,
    views: number,
    reviews: FieldTypePropertyReview[]
}

export {
  FieldTypeProperty,
  FieldTypePropertyMain,
  FieldTypePropertyUpdate
}
