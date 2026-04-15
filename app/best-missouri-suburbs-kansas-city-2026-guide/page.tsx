const blogPosts = [
 {
    id: 2,
    slug: "best-missouri-suburbs-kansas-city-2026-guide",

    metaTitle:
      "Best Missouri Suburbs of Kansas City (2026 Guide) | Key Homes KC",

    metaDescription:
      "Looking for the best place to live in the Missouri suburbs of Kansas City? We break down top KC MO suburbs by schools, affordability, and lifestyle.",

    primaryKeyword: "best suburbs of Kansas City",

    secondaryKeywords: [
      "best places to live in Missouri near Kansas City",
      "safest suburbs in Kansas City MO",
      "Missouri suburbs ranking",
      "living in Lee's Summit vs Liberty",
    ],

    title: "Best Missouri Suburbs of Kansas City (2026 Guide)",

    excerpt:
      "Explore the best Missouri suburbs of Kansas City based on schools, safety, affordability, and lifestyle in this 2026 guide.",

    img: "/listing/2.webp",
    category: "best suburbs of Kansas City",
    date: "Jan 2026",
    readTime: "10 min read",

    content: [
      {
        type: "paragraph",
        text: "Are you looking for the perfect place to call home in the Missouri suburbs of Kansas City? While the city center offers vibrant urban living, many families and professionals find their ideal lifestyle in the surrounding Missouri counties. From the rapid growth of the Northland to the established charm of Jackson County, the Missouri side of the metro is consistently ranked among the best places to live in the United States.",
      },

      {
        type: "paragraph",
        text: "At Key Homes KC, we specialize in helping families find their perfect fit across the entire Missouri side of the metro. Whether you are a first-time buyer, a relocating professional, or a senior looking to downsize through our Preferred Pathways program, we have the local expertise to guide you. Led by Rebeccah Graham, our team has over 15 years of experience and has helped more than 200 families find their dream homes in these very Missouri suburbs.",
      },

      {
        type: "heading",
        text: "What Makes a Great Missouri Suburb?",
      },
      {
        type: "paragraph",
        text: "When ranking the best Missouri suburbs of Kansas City, we look at several key factors that matter most to our clients:",
      },

      {
        type: "list",
        items: [
          "School Quality: Access to top-rated Missouri public and private schools.",
          "Safety and Community: Low crime rates and active neighborhood associations.",
          "Commute Times: Proximity to major employment hubs like downtown KC, the Northland, or the growing logistics centers.",
          "Amenities: Parks, shopping, dining, and local entertainment.",
          "Housing Value: Getting the most home for your investment in the 2026 Missouri market.",
        ],
      },

      {
        type: "table",
        headers: ["Suburb", "Best For", "Top School District"],
        rows: [
          ["Lee's Summit", "Community & Downtown Vibe", "Lee's Summit R-7"],
          ["Liberty", "Historic Charm & Northland Access", "Liberty School District"],
          ["Blue Springs", "Affordability & Excellence", "Blue Springs R-4"],
          ["Parkville", "Upscale Living & River Views", "Park Hill"],
          ["Kearney", "Small-Town Feel & Growth", "Kearney R-1"],
        ],
      },

      {
        type: "heading",
        text: "Lee's Summit: Family-Friendly and Fast-Growing",
      },
      {
        type: "paragraph",
        text: "Located in Jackson County, Lee's Summit is a standout. It offers a perfect blend of a historic, walkable downtown and modern suburban developments. The Lee's Summit R-7 School District is a major draw, consistently earning top marks for both academics and athletics. For those who want a strong sense of community and a slightly more relaxed pace than the urban core, Lee's Summit is an excellent choice.",
      },

      {
        type: "heading",
        text: "Liberty: Historic Charm with Modern Amenities",
      },
      {
        type: "paragraph",
        text: "Located in Clay County, Liberty offers a unique historic feel centered around its charming downtown square and William Jewell College. The Liberty School District is one of the best in Missouri, making it a top choice for families who want to be on the north side of the metro. Liberty provides easy access to the Kansas City International Airport and the growing Northland business corridor.",
      },

      {
        type: "heading",
        text: "Blue Springs: Affordability and Growth",
      },
      {
        type: "paragraph",
        text: "Blue Springs, also in Jackson County, has seen incredible growth over the last decade. It is often seen as a more affordable alternative to some of the other top-rated suburbs while still offering access to exceptional schools and safe neighborhoods. Blue Springs is home to several major employers and offers a wide range of housing options, from established mid-century homes to brand-new construction.",
      },

      {
        type: "heading",
        text: "Parkville: Upscale Living and River Views",
      },
      {
        type: "paragraph",
        text: "Located in Platte County, Parkville is known for its upscale living and beautiful views of the Missouri River. The Park Hill School District is a major draw, consistently earning top marks for its innovative programs and student success. Parkville offers a unique blend of historic charm and modern amenities, making it a favorite for those seeking a high-end suburban lifestyle.",
      },

      {
        type: "heading",
        text: "Kearney: Small-Town Feel and Growth",
      },
      {
        type: "paragraph",
        text: "Located in Clay County, Kearney offers a unique small-town feel while still being within easy reach of the urban core. The Kearney R-1 School District is a major draw, consistently earning top marks for its commitment to student success. Kearney is a fast-growing community with a wide range of housing options, making it an excellent choice for families and first-time buyers.",
      },

      {
        type: "heading",
        text: "How to Choose the Right Missouri Suburb for You",
      },
      {
        type: "paragraph",
        text: "Choosing between these top-rated Missouri suburbs often comes down to your daily commute and your preferred lifestyle. If you work in downtown Kansas City, suburbs like Lee's Summit or Liberty offer a straightforward drive. If you are looking for a more rural or exurban feel, growing communities in Lafayette or Clinton counties may be the perfect fit.",
      },


    ],

    faqs: [
      {
        question: "What is the safest suburb in Kansas City MO?",
        answer:
          "While many Missouri suburbs are very safe, Lee's Summit, Liberty, and Parkville consistently rank among the safest cities in the state based on crime statistics.",
      },
      {
        question: "Which Missouri suburb has the best schools?",
        answer:
          "The Lee's Summit R-7, Blue Springs, Liberty, and Park Hill districts are all widely considered top-ranked districts in the Missouri side of the metro.",
      },
      {
        question: "Is it better to live in Jackson, Clay, or Platte County?",
        answer:
          "This depends on your priorities. Jackson County offers a mix of urban and suburban amenities, while Clay and Platte counties are known for their rapid growth and excellent schools in the Northland.",
      },
      {
        question: "How do I find a home in a specific Missouri school district?",
        answer:
          "The best way is to work with a local real estate expert who knows the district boundaries. Contact Key Homes KC at 816.651.7894, and we can set up a custom search for you that filters by Missouri school district.",
      },
    ],
  },


  
]




type ContentSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items?: string[] }
  | {
      type: "table";
      headers?: string[];
      rows?: string[][];
    };

type FAQ = {
  question: string;
  answer: string;
};

type BlogPost = {
  id: number | string;
  img: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: ContentSection[];
  faqs?: FAQ[];
};

type BlogProps = {
  blogPosts?: BlogPost[];
};

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {(blogPosts || []).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Category */}
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3 capitalize">
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                {post.title}
              </h2>

              {/* Meta */}
              <div className="text-sm text-gray-500 mb-4">
                {post.date} • {post.readTime}
              </div>

              {/* Excerpt */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Dynamic Content */}
              <div className="space-y-5 text-gray-700">
                {post.content?.map?.((section, index) => {
                  if (section.type === "paragraph") {
                    return (
                      <p key={index} className="leading-relaxed">
                        {section.text}
                      </p>
                    );
                  }

                  if (section.type === "heading") {
                    return (
                      <h3
                        key={index}
                        className="text-xl md:text-2xl font-semibold text-gray-800 mt-6"
                      >
                        {section.text}
                      </h3>
                    );
                  }

                  if (section.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="list-disc list-inside space-y-2"
                      >
                        {section.items?.map?.((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (section.type === "table") {
                    return (
                      <div
                        key={index}
                        className="overflow-x-auto rounded-lg border"
                      >
                        <table className="min-w-full text-sm text-left">
                          <thead className="bg-gray-100 text-gray-700">
                            <tr>
                              {section.headers?.map?.((header, i) => (
                                <th key={i} className="px-4 py-3 font-semibold">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.rows?.map?.((row, i) => (
                              <tr
                                key={i}
                                className="border-t hover:bg-gray-50"
                              >
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-3">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              {/* FAQ Section */}
             {/* FAQ Section */}
{Array.isArray(post.faqs) && post.faqs.length > 0 && (
  <div className="mt-10">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      FAQs
    </h3>
    <div className="space-y-4">
      {post.faqs.map((faq, i) => (
        <div key={i} className="bg-gray-50 border rounded-lg p-4">
          <p className="font-medium text-gray-800">{faq.question}</p>
          <p className="text-gray-600 mt-1 text-sm">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;