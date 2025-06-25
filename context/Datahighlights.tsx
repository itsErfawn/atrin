type TStory = {
  url: string;
  duration: number;
  header: {
    heading: string;
    subheading: string;
  };
};
export const highlights: { id: number; title: string; stories: TStory[] }[] = [
  {
    id: 1,
    title: "محصولات جدید",
    stories: [
      {
        url: "/image/story/story1.jpg",
        duration: 3000,
        header: {
          heading: "محصول A",
          subheading: "۲۳ خرداد",
        },
      },
    ],
  },
  {
    id: 2,
    title: "ارسال‌ها",
    stories: [
      {
        url: "/image/story/story2.jpg",
        duration: 3000,
        header: {
          heading: "ارسال فوری",
          subheading: "۲۴ خرداد",
        },
      },
    ],
  },
  {
    id: 3,
    title: "تخفیف ویژه",
    stories: [
      {
        url: "/image/story/story3.jpg",
        duration: 3000,
        header: {
          heading: "۵۰٪ تخفیف",
          subheading: "۲۵ خرداد",
        },
      },
    ],
  },
  {
    id: 4,
    title: "پرفروش‌ترین‌ها",
    stories: [
      {
        url: "/image/story/story4.jpg",
        duration: 3000,
        header: {
          heading: "محصول B",
          subheading: "۲۵ خرداد",
        },
      },
    ],
  },
  {
    id: 5,
    title: "بررسی مشتریان",
    stories: [
      {
        url: "/image/story/story5.jpg",
        duration: 3000,
        header: {
          heading: "نظرات",
          subheading: "۲۶ خرداد",
        },
      },
    ],
  },
  {
    id: 6,
    title: "پشت صحنه",
    stories: [
      {
        url: "/image/story/story6.jpg",
        duration: 3000,
        header: {
          heading: "پشت صحنه",
          subheading: "۲۶ خرداد",
        },
      },
    ],
  },
  {
    id: 7,
    title: "معرفی برند",
    stories: [
      {
        url: "/image/story/story7.jpg",
        duration: 3000,
        header: {
          heading: "برند ما",
          subheading: "۲۷ خرداد",
        },
      },
    ],
  },
];
