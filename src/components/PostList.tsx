import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

type PostProps = {
  id: number;
  title: string;
  body: string;
};

export default function PostList({ posts }: { posts: PostProps[] }) {
  const newPosts = posts.slice(0, 4).map((post) => (
    <>
      <li key={post.id}>
        <Post id={post.id} title={post.title} body={post.body} />
      </li>
    </>
  ));
  return <ul className="grid grid-cols-2 ">{newPosts}</ul>;
}

function Post({ title, body }: PostProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
      {body}
      </AccordionContent>
    </AccordionItem>
    </Accordion>
  );
}

