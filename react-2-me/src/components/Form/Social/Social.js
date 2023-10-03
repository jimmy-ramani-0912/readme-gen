import React from "react";
import Styled from "styled-components";
import Input from "../Input/Input";

const SocialContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap:15rem;
  margin:0 20rem;

  @media screen and (max-width: 1200px) {
    margin:0 4rem;
    column-gap:5rem;
}

@media screen and (max-width: 768px) {
    margin:0;
    column-gap:1.6rem;
}
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

  @media screen and (max-width: 768px) {
    margin-right: 1.6rem;
    width: 2.8rem;
  height: 2.8rem;
  }
`;

const socialLinks = [
  {
    title: "https://github.com/",
    placeholder: "github username",
    src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
  },
  {
    title: "https://dev.to/",
    placeholder: "dev.to username",
    src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png",
  },
  {
    title: "https://codesandbox.io/",
    placeholder: "codesandbox username",
    src: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
  },
  {
    title: "https://in.linkedin.com/",
    placeholder: "linkedin username",
    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    title: "https://www.facebook.com/",
    placeholder: "facebook username",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
  },
  {
    title: "https://dribbble.com/",
    placeholder: "dribble username",
    src: "https://cdn-icons-png.flaticon.com/512/408/408743.png",
  },
  {
    title: "https://hashnode.com/",
    placeholder: "hashnode username (with @)",
    src: "https://iconape.com/wp-content/png_logo_vector/cib-hashnode.png",
  },
  {
    title: "https://www.youtube.com/?themeRefresh=1",
    placeholder: "youtube channel name",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
  },
  {
    title: "https://www.hackerrank.com/",
    placeholder: "hackerrank username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3628233-3031053.png",
  },
  {
    title: "https://leetcode.com/",
    placeholder: "leetcode username",
    src: "https://www.svgrepo.com/show/306328/leetcode.svg",
  },
  {
    title: "https://www.hackerearth.com/",
    placeholder: "hackerearth username (with @)",
    src: "https://static-00.iconduck.com/assets.00/hackerearth-icon-444x512-0heomwse.png",
  },
  {
    title: "https://discord.com/",
    placeholder: "Discord invite (only code)",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
  {
    title: "https://twitter.com/",
    placeholder: "twitter username",
    src: "https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png",
  },
  {
    title: "https://codepen.io/",
    placeholder: "codepen username",
    src: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-codepen-4550862_121336.png",
  },
  {
    title: "https://stackoverflow.com/",
    placeholder: "stackoverflow user ID",
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111690.png",
  },
  {
    title: "https://www.instagram.com/",
    placeholder: "instagram username",
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384031.png",
  },
  {
    title: "https://www.kaggle.com/",
    placeholder: "kaggle username",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-kaggle-3628281-3031974.png",
  },
  {
    title: "https://www.behance.net/",
    placeholder: "behance username",
    src: "https://cdn-icons-png.flaticon.com/512/733/733594.png",
  },
  {
    title: "https://medium.com/",
    placeholder: "medium username (with @)",
    src: "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png",
  },
  {
    title: "https://www.codechef.com/",
    placeholder: "codechef username",
    src: "https://static-00.iconduck.com/assets.00/codechef-icon-380x512-r1v87w22.png",
  },
  {
    title: "https://codeforces.com/",
    placeholder: "codeforces username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
  },
  {
    title: "https://www.topcoder.com/",
    placeholder: "topcoder username",
    src: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/topcoder-512.png",
  },
  {
    title: "https://www.geeksforgeeks.org/",
    placeholder: "GFG (<username>/profile)",
    src: "https://static-00.iconduck.com/assets.00/geeksforgeeks-icon-512x264-y71dixbv.png",
  },
  {
    title: "https://www.rss.org/",
    placeholder: "RSS feed URL",
    src: "https://cdn-icons-png.flaticon.com/512/3670/3670157.png",
  },
];

function Social({ socialData, onInputChange }) {
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
              value={
                socialData.find((item) => item.title === link.title)?.value ||
                ""
              }
              onChange={(value) => onInputChange(link.title, link.src, value)}
            />
          </Flex>
        </SocialLink>
      ))}
    </SocialContainer>
  );
}

export default Social;
