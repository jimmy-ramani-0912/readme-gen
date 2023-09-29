import React from "react";
import Styled from "styled-components";
import Input from "../Input/Input";

const SocialContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap:15rem;
  margin:0 20rem;
`;

const SocialLink = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Flex = Styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = Styled.img`
  margin-right: 3.6rem;
  width: 4rem;
  height: 4rem;
  filter: saturate(0);
`;

const socialLinks = [
  {
    title: "s1",
    placeholder: "github username",
    src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
  },
  {
    title: "s2",
    placeholder: "dev.to username",
    src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png",
  },
  {
    title: "s3",
    placeholder: "codesandbox username",
    src: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
  },
  {
    title: "s4",
    placeholder: "linkedin username",
    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    title: "s5",
    placeholder: "facebook username",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
  },
  {
    title: "s6",
    placeholder: "dribble username",
    src: "https://cdn-icons-png.flaticon.com/512/408/408743.png",
  },
  {
    title: "s7",
    placeholder: "hashnode username (with @)",
    src: "https://iconape.com/wp-content/png_logo_vector/cib-hashnode.png",
  },
  {
    title: "s8",
    placeholder: "youtube channel name",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
  },
  {
    title: "s9",
    placeholder: "hackerrank username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628233-3031053.png",
  },
  {
    title: "s10",
    placeholder: "leetcode username",
    src: "https://www.svgrepo.com/show/306328/leetcode.svg",
  },
  {
    title: "s11",
    placeholder: "hackerearth username (with @)",
    src: "https://static-00.iconduck.com/assets.00/hackerearth-icon-444x512-0heomwse.png",
  },
  {
    title: "s12",
    placeholder: "Discord invite (only code)",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
  {
    title: "s13",
    placeholder: "twitter username",
    src: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
  },
  {
    title: "s14",
    placeholder: "codepen username",
    src: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-codepen-4550862_121336.png",
  },
  {
    title: "s15",
    placeholder: "stackoverflow user ID",
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111690.png",
  },
  {
    title: "s16",
    placeholder: "instagram username",
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
  },
  {
    title: "s17",
    placeholder: "kaggle username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-kaggle-3628281-3031974.png",
  },
  {
    title: "s18",
    placeholder: "behance username",
    src: "https://cdn-icons-png.flaticon.com/512/733/733594.png",
  },
  {
    title: "s19",
    placeholder: "medium username (with @)",
    src: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
  },
  {
    title: "s20",
    placeholder: "codechef username",
    src: "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png",
  },
  {
    title: "s21",
    placeholder: "codeforces username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
  },
  {
    title: "s22",
    placeholder: "topcoder username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/topcoder-512.png",
  },
  {
    title: "s23",
    placeholder: "GFG (<username>/profile)",
    src: "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png",
  },
  {
    title: "s24",
    placeholder: "RSS feed URL",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
];

function Social() {
  return (
    <SocialContainer>
      {socialLinks.map((link, index) => (
        <SocialLink key={index}>
          <Flex>
            <IconImage src={link.src} />
            <Input
              width={"70%"}
              title={link.title}
              placeholder={link.placeholder}
            />
          </Flex>
        </SocialLink>
      ))}
    </SocialContainer>
  );
}

export default Social;
