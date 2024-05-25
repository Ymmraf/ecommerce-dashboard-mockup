import { atom } from "jotai";
import { CartProduct } from "@/type";

export const cart = atom<CartProduct[]>([])