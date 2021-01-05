//typings 专门储存ts的类型
export enum CATEGORY_TYPES { //课程类型
    ALL,
    REACT,
    VUE,
    NODE,
}

export interface IHomeState {
    currentCategory: CATEGORY_TYPES;
    sliders: ISliders[];
    lessons: ILessons;
}
export interface ISliders {
    url: string;
}
export interface ILessons {
    hasMore: boolean;
    loading: boolean;
    offset: number;
    limit: number;
    list: ILessonList[];
}
export interface ILessonList {
    title: string;
    video: string;
    poster: string;
    price: number;
    category?: string;
}
