import marioImage from "../assets/authors/ryohei.jpeg";

export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Ryohei Tanaka",
    slug: "ryohei-tanaka",
    image: marioImage,
    bio: "スタートアップ数社のITエンジニア、今はマレーシア在住。移住のコスパとビザ取得術、生活ハックを発信し、マレーシア移住ロードマップを届けます。",
  },
];
