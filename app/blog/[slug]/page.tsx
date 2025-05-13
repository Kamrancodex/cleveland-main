import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Tag, User, Share2 } from "lucide-react";
import { BlogPostClient } from "./client";

const playfair = Playfair_Display({ subsets: ["latin"] });

// This would typically come from a database or API
const blogPosts = {
  "ultimate-guide-cleveland-food-scene": {
    id: 1,
    title: "The Ultimate Guide to Cleveland's Food Scene in 2023",
    excerpt:
      "From award-winning restaurants to hidden gems, discover the best places to eat and drink in Cleveland this year.",
    content: `
      Cleveland's food scene has evolved dramatically over the past decade, transforming from an underrated Midwest dining destination to one of America's most exciting culinary cities. In 2023, the city continues to impress with its diverse offerings, from fine dining establishments to cozy neighborhood spots that showcase the region's cultural diversity and agricultural bounty.

      ## New Restaurants Making Waves

      This year has seen an explosion of exciting new restaurant openings across Cleveland's neighborhoods. In Ohio City, Chef Maria Rodriguez's "Tierra" brings authentic regional Mexican cuisine with a modern twist, using locally-sourced ingredients and traditional cooking techniques. The restaurant's mole negro, made with over 30 ingredients and simmered for days, has quickly become one of the city's most talked-about dishes.

      Over in Tremont, "Hearth & Vine" opened in a beautifully restored Victorian home, offering wood-fired cooking and an impressive natural wine program. Chef James Park's commitment to working directly with local farmers has resulted in a menu that truly reflects Ohio's seasonal bounty.

      ## Cleveland Classics That Still Impress

      While new restaurants continue to open, Cleveland's established culinary institutions remain stronger than ever. The West Side Market, a Cleveland landmark since 1912, continues to house dozens of vendors offering everything from locally-raised meats to Eastern European specialties that reflect the city's immigrant heritage.

      Michael Symon's "Lola Bistro," which helped put Cleveland on the national culinary map, celebrates its 25th anniversary this year with special tasting menus that revisit favorite dishes from the past quarter-century.

      ## Neighborhood by Neighborhood

      ### Ohio City
      Still the heart of Cleveland's food scene, Ohio City offers everything from the city's best tacos at "La Plaza" to innovative fine dining. Don't miss the newly expanded Great Lakes Brewing Company, which now offers brewery tours that include exclusive tastings of experimental brews.

      ### Tremont
      This charming neighborhood continues to offer some of the city's most inviting dining experiences. "Fahrenheit" remains a cornerstone of the area, while newer additions like "Trio" bring Mediterranean-inspired small plates in a lively atmosphere.

      ### Asia Town
      Perhaps Cleveland's most underrated food destination, Asia Town offers authentic Chinese, Korean, Vietnamese, and Thai cuisines. The weekend dim sum at "Li Wah" still draws crowds, while "Korea House" offers tabletop barbecue that rivals what you'd find in Seoul.

      ## Beyond Restaurants

      Cleveland's food scene extends beyond traditional restaurants. The city's coffee culture has exploded, with roasters like Rising Star and Phoenix Coffee setting high standards. Craft breweries continue to multiply, with Platform Beer Co. and Masthead Brewing leading the way.

      Farmers markets have expanded beyond the warm months, with indoor winter markets ensuring year-round access to local produce. The Cleveland Flea food vendor program has become an incubator for food entrepreneurs, allowing them to test concepts before opening permanent locations.

      ## Looking Ahead

      As we move through 2023, Cleveland's food scene shows no signs of slowing down. New restaurant announcements continue to create buzz, while established places evolve to stay relevant. With its combination of innovative new concepts and deep-rooted culinary traditions, Cleveland continues to earn its place as one of America's most exciting food cities.

      Whether you're a visitor or a longtime resident, there's never been a better time to explore Cleveland through its food. This guide only scratches the surface of what the city has to offer – the real joy comes in exploring, one delicious meal at a time.
    `,
    category: "Food & Drink",
    date: "September 15, 2023",
    author: "Sarah Johnson",
    authorBio:
      "Sarah is a Cleveland-based food writer and restaurant critic with over 15 years of experience covering the local food scene. Her work has appeared in Food & Wine, Eater, and The Cleveland Plain Dealer.",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    tags: ["Food", "Restaurants", "Guides"],
    relatedPosts: [5, 3],
  },
  "hidden-gems-cleveland-art-scene": {
    id: 2,
    title: "10 Hidden Gems in Cleveland's Art Scene",
    excerpt:
      "Beyond the major museums, Cleveland offers a wealth of smaller galleries and art spaces worth exploring.",
    content: `
      Cleveland's art scene extends far beyond the world-renowned Cleveland Museum of Art. Throughout the city's diverse neighborhoods, you'll find a thriving ecosystem of independent galleries, artist-run spaces, and creative venues that showcase emerging talent and experimental work.

      ## 1. Spaces Gallery

      Located in Ohio City, SPACES is a contemporary art venue dedicated to artists who explore and experiment. Unlike traditional galleries, SPACES focuses on commissioning new work rather than selling existing pieces. Their programming often addresses social issues and community concerns through thought-provoking installations and performances.

      ## 2. Zygote Press

      This artist-run printmaking workshop and gallery in the St. Clair-Superior neighborhood offers classes, studio access, and exhibitions. Zygote Press has become a vital resource for artists working in lithography, etching, letterpress, and other print mediums. Their gallery regularly showcases innovative approaches to printmaking by local and visiting artists.

      ## 3. The Sculpture Center

      Dedicated to advancing the careers of emerging sculptors, this University Circle institution presents cutting-edge three-dimensional work in its intimate galleries. The Sculpture Center's outdoor space also features rotating installations that engage with the surrounding urban environment.

      ## 4. 78th Street Studios

      Housed in a former American Greetings creative studio, this massive complex in Detroit Shoreway contains over 60 independent galleries, studios, and creative businesses. On Third Fridays, the entire building opens to the public, creating Cleveland's largest art walk experience with thousands of visitors exploring everything from fine art photography to avant-garde installations.

      ## 5. Transformer Station

      This contemporary art space in Ohio City's Hingetown area occupies a beautifully renovated electrical substation. A partnership between the Bidwell Foundation and the Cleveland Museum of Art, Transformer Station presents ambitious contemporary exhibitions in its industrial-chic setting.

      ## 6. The Yards Projects

      Located in Worthington Yards apartments downtown, this innovative gallery transforms residential common spaces into curated exhibition venues. The program supports emerging artists while making contemporary art an integral part of residents' daily experience.

      ## 7. Cleveland Print Room

      Dedicated to the photographic arts, this unique nonprofit offers darkroom facilities, classes, and exhibitions focused on analog photography. In an increasingly digital world, the Cleveland Print Room preserves traditional photographic processes while pushing the medium in new directions.

      ## 8. moCa Cleveland

      While not exactly hidden, the Museum of Contemporary Art Cleveland's striking geometric building in University Circle houses exhibitions that often fly under the radar. With free admission, moCa presents challenging work by international contemporary artists in a space designed to encourage new perspectives.

      ## 9. Waterloo Arts

      At the heart of the Waterloo Arts District, this community-focused gallery and arts center hosts exhibitions, concerts, and educational programs. Their annual Waterloo Arts Fest transforms the entire street into a celebration of visual and performing arts.

      ## 10. The Bonfoey Gallery

      Operating since 1893, Cleveland's oldest gallery represents contemporary artists while offering expert framing and art consulting services. Their downtown location showcases museum-quality work by established and mid-career regional artists.

      ## Discovering More

      Cleveland's art scene continues to evolve, with pop-up galleries, apartment shows, and temporary installations appearing regularly throughout the city. To stay connected with this dynamic community, follow local arts publications like CAN Journal, attend gallery openings, and don't be afraid to explore neighborhoods beyond the usual cultural districts.

      Whether you're a serious collector or simply curious about contemporary art, Cleveland's hidden art spaces offer authentic experiences and direct connections with the creative minds shaping our visual culture.
    `,
    category: "Local Guides",
    date: "August 28, 2023",
    author: "Michael Reynolds",
    authorBio:
      "Michael is an arts writer and curator who has been covering Cleveland's visual arts scene for over a decade. He serves on the board of several local arts organizations and teaches art history at Cleveland State University.",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544900591-a1b918ec6900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581260466292-23683ef7d618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574182022882-d68bd52c5350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    tags: ["Art", "Culture", "Local Guides"],
    relatedPosts: [4, 6],
  },
  "best-parks-outdoor-spaces-cleveland": {
    id: 7,
    title: "A Local's Guide to Cleveland's Best Parks and Outdoor Spaces",
    excerpt:
      "From lakefront parks to hidden green spaces, here are the best places to enjoy the outdoors in Cleveland.",
    content: `
      Cleveland might be known for its industrial heritage, but the city is home to an impressive array of parks, trails, and natural areas that offer residents and visitors alike a chance to connect with nature. From sprawling lakefront parks to hidden urban oases, here's your guide to the best outdoor spaces in The Land.

      ## Lakefront Parks

      Cleveland's position on Lake Erie blesses the city with miles of shoreline, much of which has been developed into beautiful public parks.

      **Edgewater Park** is perhaps the crown jewel of Cleveland's lakefront. With 147 acres that include a swimming beach, fishing pier, and walking trails, Edgewater offers stunning views of the downtown skyline and Lake Erie. The recently renovated beach house provides modern amenities and dining options.

      **Wendy Park**, located at Whiskey Island, offers a more rustic lakefront experience. This natural area includes hiking trails, bird watching opportunities, and a marina. It's become a popular spot for paddleboarders and kayakers to launch into the lake during summer months.

      **Lakewood Park**, though technically in the adjacent city of Lakewood, deserves mention for its Solstice Steps - a cascading cement staircase facing the lake that has become a popular spot to watch the sunset.

      ## Metropolitan Parks

      The Cleveland Metroparks system, often called the "Emerald Necklace," encompasses over 23,000 acres of natural land with more than 300 miles of trails. 

      **Rocky River Reservation** stretches through multiple western suburbs and offers stunning views of the Rocky River Valley. The park features hiking trails, bridle paths, fishing areas, and even a nature center with educational programs.

      **Bedford Reservation** in the southeast suburbs is home to Tinker's Creek Gorge, a National Natural Landmark. The dramatic ravines and forests here make for spectacular hiking, especially in fall when the colors change.

      **North Chagrin Reservation** features the 283-acre A.B. Williams Memorial Woods, one of the few remaining old-growth forests in Ohio. The reservation is also home to Squire's Castle, a picturesque stone shell of a gatehouse that makes for great photo opportunities.

      ## Urban Green Spaces

      Within the city itself, Cleveland offers numerous smaller parks and green spaces that provide respite from urban life.

      **The Cleveland Cultural Gardens** in Rockefeller Park represent one of the city's most unique attractions. This chain of 33 gardens, each dedicated to a different ethnic group, stretches along East Boulevard and MLK Jr. Drive, creating a living monument to Cleveland's diverse heritage.

      **Lincoln Park** in Tremont offers beautiful views of the downtown skyline, particularly at night. This neighborhood park hosts summer concerts and events that draw locals from across the city.

      **Public Square**, recently renovated in 2016, serves as Cleveland's central gathering space. Though not a traditional park, its green spaces, water features, and seasonal programming make it a vibrant urban oasis.

      ## Hidden Gems

      Beyond the well-known parks, Cleveland has several lesser-known outdoor spaces worth exploring.

      **Doan Brook Gorge** in the University Circle area offers a surprising wilderness experience right in the heart of the city. The trail follows Doan Brook through a ravine that feels removed from the urban environment surrounding it.

      **Lake View Cemetery**, while primarily a cemetery, functions as a beautiful arboretum and park-like space. With rolling hills, a scenic lake, and notable monuments including President Garfield's tomb and the Wade Memorial Chapel, it's a peaceful place for reflection and walking.

      **Erie Street Cemetery** downtown is a historic burial ground dating back to 1826. Though small, it provides a quiet green space amid the bustle of downtown and offers fascinating glimpses into Cleveland's past.

      ## Seasonal Considerations

      Cleveland's outdoor spaces transform dramatically with the seasons, offering different experiences throughout the year.

      **Spring** brings flowering trees to Wade Oval and the Cultural Gardens, while migratory birds can be spotted at lakefront parks.

      **Summer** is perfect for beach days at Edgewater, kayaking on the Cuyahoga River, or attending outdoor concerts at Edgewater or Blossom Music Center (just outside the city).

      **Fall** turns Cleveland's parks into a riot of color, with the Metroparks offering some of the best leaf-peeping in the region. Hayrides and fall festivals abound.

      **Winter** transforms the parks into snowy playgrounds, with opportunities for cross-country skiing at the Metroparks, sledding at Coventry P.E.A.C.E. Park, and ice skating at Public Square or Wade Oval.

      ## Connecting Green Spaces

      Cleveland continues to invest in connecting its green spaces through trail networks.

      The **Cleveland Foundation Centennial Lake Link Trail** is helping connect the Towpath Trail to Whiskey Island and Edgewater Park, creating a continuous path from the Cuyahoga Valley to Lake Erie.

      The **Redline Greenway** is transforming unused land along the RTA Red Line into a multi-purpose trail connecting the west side to downtown.

      ## Local Tips

      * Visit Edgewater Park on a Tuesday evening in summer for the weekly food truck event, "Edgewater LIVE."
      * Many Metroparks locations offer free guided hikes led by naturalists - check their calendar for details.
      * The views of downtown from Edgewater are spectacular at sunset, but arrive early to get parking in peak summer months.
      * While Lake Erie beaches are clean and monitored, check the Ohio EPA website for water quality advisories before swimming, especially after heavy rains.

      Whether you're looking for active recreation or peaceful contemplation, Cleveland's parks and natural areas offer something for everyone, proving that the Forest City still lives up to its nickname.
    `,
    category: "Local Guides",
    date: "June 25, 2023",
    author: "Jessica Lee",
    authorBio:
      "Jessica has been exploring Cleveland's outdoor spaces for over 15 years. She leads guided hiking tours through the Cleveland Metroparks and contributes to several outdoor recreation publications.",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596995804697-27d11d43652e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    tags: ["Outdoors", "Parks", "Local Guides"],
    relatedPosts: [2, 4],
  },
};

// Server component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Access the slug directly without using React.use()
  const { slug } = params;

  const blogPost = blogPosts[slug as keyof typeof blogPosts] || {
    id: 0,
    title: "Article Not Found",
    excerpt: "This article does not exist",
    content: "This article does not exist",
    category: "",
    date: "",
    author: "",
    authorBio: "",
    authorImage:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gallery: [],
    tags: [],
    relatedPosts: [],
  };

  // Get related posts if they exist
  const relatedPostsData = blogPost.relatedPosts
    ? blogPost.relatedPosts
        .map((id) => {
          const post = Object.values(blogPosts).find((post) => post.id === id);
          return post;
        })
        .filter(Boolean)
    : [];

  // Function to convert markdown-like headings to HTML
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className={`${playfair.className} text-2xl font-bold mt-8 mb-4`}
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.trim() === "") {
        return <div key={index} className="h-4"></div>;
      } else {
        return (
          <p key={index} className="mb-4">
            {line}
          </p>
        );
      }
    });
  };

  // Pass all data to the client component
  return (
    <BlogPostClient
      blogPost={blogPost}
      relatedPostsData={relatedPostsData}
      formattedContent={renderContent(blogPost.content)}
      playfairClass={playfair.className}
    />
  );
}
