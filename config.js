// ===== Supabase 配置 =====

const SUPABASE_URL = "https://rlvobtjjgejhwfxhhzpm.supabase.co";

const SUPABASE_KEY = "sb_publishable_vSANuTtW2_s3YWOkzZAjgA_hRVOc9dE";

// ===== 家庭菜单 =====

const MENU = [
    {
        category: "热菜",
        items: [
            { id: 1, name: "红烧肉", price: 38, emoji: "🥩" },
            { id: 2, name: "宫保鸡丁", price: 28, emoji: "🍗" },
            { id: 3, name: "西红柿炒蛋", price: 18, emoji: "🍅" },
            { id: 4, name: "鱼香肉丝", price: 26, emoji: "🥢" }
        ]
    },
    {
        category: "凉菜",
        items: [
            { id: 5, name: "拍黄瓜", price: 12, emoji: "🥒" },
            { id: 6, name: "凉拌木耳", price: 15, emoji: "🍄" }
        ]
    },
    {
        category: "主食",
        items: [
            { id: 7, name: "米饭", price: 2, emoji: "🍚" },
            { id: 8, name: "炒饭", price: 15, emoji: "🍳" },
            { id: 9, name: "面条", price: 16, emoji: "🍜" }
        ]
    },
    {
        category: "饮料",
        items: [
            { id: 10, name: "可乐", price: 5, emoji: "🥤" },
            { id: 11, name: "雪碧", price: 5, emoji: "🥤" }
        ]
    }
];

// ===== 家庭成员 =====

const USERS = [
    "爸爸",
    "妈妈",
    "爷爷",
    "奶奶",
    "哥哥",
    "姐姐",
    "弟弟",
    "妹妹",
    "我",
    "其他"
];