import { unstable_noStore as noStore } from 'next/cache';

type Image = {
  _id: string;
  ImageName: string;
  ImageDescription: string;
  ImagePath: string;
};

export type Project = {
  _id: string;
  address: string;
  name: string;
  slug: string;
  bedrooms: string;
  buildingType: string;
  city_name: string;
  developer: string;
  developer_info: string;
  estimatedCompletion: string;
  images: Image[];
  incentives: string;
  price: string;
  province: string;
  sizeSqFt: string;
  status: string;
  street_name: string;
  summary: string;
  unitsStories: string;
  units: {
    _id: string;
    br: number;
    status: string;
    statusName: string;
    colType: string;
    unitType: string;
    unitName: string;
    ba: number;
    sqft: number;
    lotBalc: string;
    price: null | number;
    lastPrice: null | number;
    lastPriceWithValue: null | string;
    unitStyle: string;
    url: string;
    image: string;
  }[];
};

const BASE_URL = 'https://projectsapi-j1mi.onrender.com/projects';

export async function fetchProjects(): Promise<Project[]> {
  noStore();
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}

export async function fetchProjectBySlug(slug: string): Promise<Project> {
  noStore();
  const res = await fetch(`${BASE_URL}/${slug}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch project with slug: ${slug}`);
  }
  return res.json();
}
