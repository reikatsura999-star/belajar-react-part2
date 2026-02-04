

import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select"
import { Filter } from "lucide-react"

type ProductFilterProps = {
    category: string;
    onCategoryChange: (value: string) => void;
}

export function ProductFilter({ category, onCategoryChange }: ProductFilterProps) {
    const categories = [
        { value: "all", label: "Semua Kategori" },
        { value: "electronics", label: "Elektronik" },
        { value: "jewelery", label: "Perhiasan" },
        { value: "men's clothing", label: "Pakaian Pria" },
        { value: "women's clothing", label: "Pakaian Wanita" },
    ]

    return (
        <div className="flex justify-center mb-8">
            <div className="w-full max-w-[280px]">
                <div className="relative group">
                    <Select value={category} onValueChange={onCategoryChange}>
                        <SelectTrigger className="w-full h-12 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300 px-6 font-bold group-hover:shadow-blue-500/10">
                            <div className="flex items-center gap-3">
                                <Filter className="h-4 w-4 text-blue-500" />
                                <SelectValue placeholder="Pilih Kategori" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl p-2 shadow-2xl border-slate-100 dark:border-slate-800">
                            {categories.map((cat) => (
                                <SelectItem
                                    key={cat.value}
                                    value={cat.value}
                                    className="rounded-xl py-3 cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/30 font-semibold"
                                >
                                    {cat.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}