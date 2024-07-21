// models/Color.ts

export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACCENT = 'accent',
    NEUTRAL = 'neutral',
    BASE = 'base',
    PRIMARY_CONTENT = 'primary-content',
    SECONDARY_CONTENT = 'secondary-content',
    NEUTRAL_CONTENT = 'neutral-content',
    BASE_CONTENT = 'base-content',
    ACCENT_CONTENT = 'accent-content',
    INHERIT = 'inherit',
    CURRENT = 'current',
    TRANSPARENT = 'transparent',
    INFO = "info",
    INFO_CONTENT = "info-content",
    SUCCES = "success",
    SUCCESS_CONTENT = "success-content",
    WARNING = "warning",
    WARNING_CONTENT = "warning-content",
    ERROR = "error",
    ERROR_CONTENT ="error-containt",


    BLACK = 'black',
    WHITE = 'white',
    SLATE_50 = 'slate-50',
    SLATE_100 = 'slate-100',
    SLATE_200 = 'slate-200',
    SLATE_300 = 'slate-300',
    SLATE_400 = 'slate-400',
    SLATE_500 = 'slate-500',
    SLATE_600 = 'slate-600',
    SLATE_700 = 'slate-700',
    SLATE_800 = 'slate-800',
    SLATE_900 = 'slate-900',
    SLATE_950 = 'slate-950',
    RED_50 = 'red-50',
    RED_100 = 'red-100',
    RED_200 = 'red-200',
    RED_300 = 'red-300',
    RED_400 = 'red-400',
    RED_500 = 'red-500',
    RED_600 = 'red-600',
    RED_700 = 'red-700',
    RED_800 = 'red-800',
    RED_900 = 'red-900',
    ORANGE_50 = 'orange-50',
    ORANGE_100 = 'orange-100',
    ORANGE_200 = 'orange-200',
    ORANGE_300 = 'orange-300',
    ORANGE_400 = 'orange-400',
    ORANGE_500 = 'orange-500',
    ORANGE_600 = 'orange-600',
    ORANGE_700 = 'orange-700',
    ORANGE_800 = 'orange-800',
    ORANGE_900 = 'orange-900',
    YELLOW_50 = 'yellow-50',
    YELLOW_100 = 'yellow-100',
    YELLOW_200 = 'yellow-200',
    YELLOW_300 = 'yellow-300',
    YELLOW_400 = 'yellow-400',
    YELLOW_500 = 'yellow-500',
    YELLOW_600 = 'yellow-600',
    YELLOW_700 = 'yellow-700',
    YELLOW_800 = 'yellow-800',
    YELLOW_900 = 'yellow-900',
    GREEN_50 = 'green-50',
    GREEN_100 = 'green-100',
    GREEN_200 = 'green-200',
    GREEN_300 = 'green-300',
    GREEN_400 = 'green-400',
    GREEN_500 = 'green-500',
    GREEN_600 = 'green-600',
    GREEN_700 = 'green-700',
    GREEN_800 = 'green-800',
    GREEN_900 = 'green-900',
    TEAL_50 = 'teal-50',
    TEAL_100 = 'teal-100',
    TEAL_200 = 'teal-200',
    TEAL_300 = 'teal-300',
    TEAL_400 = 'teal-400',
    TEAL_500 = 'teal-500',
    TEAL_600 = 'teal-600',
    TEAL_700 = 'teal-700',
    TEAL_800 = 'teal-800',
    TEAL_900 = 'teal-900',
    BLUE_50 = 'blue-50',
    BLUE_100 = 'blue-100',
    BLUE_200 = 'blue-200',
    BLUE_300 = 'blue-300',
    BLUE_400 = 'blue-400',
    BLUE_500 = 'blue-500',
    BLUE_600 = 'blue-600',
    BLUE_700 = 'blue-700',
    BLUE_800 = 'blue-800',
    BLUE_900 = 'blue-900',
    INDIGO_50 = 'indigo-50',
    INDIGO_100 = 'indigo-100',
    INDIGO_200 = 'indigo-200',
    INDIGO_300 = 'indigo-300',
    INDIGO_400 = 'indigo-400',
    INDIGO_500 = 'indigo-500',
    INDIGO_600 = 'indigo-600',
    INDIGO_700 = 'indigo-700',
    INDIGO_800 = 'indigo-800',
    INDIGO_900 = 'indigo-900',
    PURPLE_50 = 'purple-50',
    PURPLE_100 = 'purple-100',
    PURPLE_200 = 'purple-200',
    PURPLE_300 = 'purple-300',
    PURPLE_400 = 'purple-400',
    PURPLE_500 = 'purple-500',
    PURPLE_600 = 'purple-600',
    PURPLE_700 = 'purple-700',
    PURPLE_800 = 'purple-800',
    PURPLE_900 = 'purple-900',
    PINK_50 = 'pink-50',
    PINK_100 = 'pink-100',
    PINK_200 = 'pink-200',
    PINK_300 = 'pink-300',
    PINK_400 = 'pink-400',
    PINK_500 = 'pink-500',
    PINK_600 = 'pink-600',
    PINK_700 = 'pink-700',
    PINK_800 = 'pink-800',
    PINK_900 = 'pink-900',
    STONE_50 = 'stone-50',
    STONE_100 = 'stone-100',
    STONE_200 = 'stone-200',
    STONE_300 = 'stone-300',
    STONE_400 = 'stone-400',
    STONE_500 = 'stone-500',
    STONE_600 = 'stone-600',
    STONE_700 = 'stone-700',
    STONE_800 = 'stone-800',
    STONE_900 = 'stone-900',

    AMBER_50 = 'amber-50',
    AMBER_100 = 'amber-100',
    AMBER_200 = 'amber-200',
    AMBER_300 = 'amber-300',
    AMBER_400 = 'amber-400',
    AMBER_500 = 'amber-500',
    AMBER_600 = 'amber-600',
    AMBER_700 = 'amber-700',
    AMBER_800 = 'amber-800',
    AMBER_900 = 'amber-900',
    LIME_50 = 'lime-50',
    LIME_100 = 'lime-100',
    LIME_200 = 'lime-200',
    LIME_300 = 'lime-300',
    LIME_400 = 'lime-400',
    LIME_500 = 'lime-500',
    LIME_600 = 'lime-600',
    LIME_700 = 'lime-700',
    LIME_800 = 'lime-800',
    LIME_900 = 'lime-900',
    EMERALD_50 = 'emerald-50',
    EMERALD_100 = 'emerald-100',
    EMERALD_200 = 'emerald-200',
    EMERALD_300 = 'emerald-300',
    EMERALD_400 = 'emerald-400',
    EMERALD_500 = 'emerald-500',
    EMERALD_600 = 'emerald-600',
    EMERALD_700 = 'emerald-700',
    EMERALD_800 = 'emerald-800',
    EMERALD_900 = 'emerald-900',
    CYAN_50 = 'cyan-50',
    CYAN_100 = 'cyan-100',
    CYAN_200 = 'cyan-200',
    CYAN_300 = 'cyan-300',
    CYAN_400 = 'cyan-400',
    CYAN_500 = 'cyan-500',
    CYAN_600 = 'cyan-600',
    CYAN_700 = 'cyan-700',
    CYAN_800 = 'cyan-800',
    CYAN_900 = 'cyan-900',
}
