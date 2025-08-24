import Layout from '@/components/Layout';
import BlogSection from '@/components/BlogSection';
import Container from '@/components/Container';

const BlogPage = () => {
    return (
        <Layout>
            <div className="py-20">
                <Container>
                    {/* The h2 and p from BlogSection will serve as the main title */}
                    <BlogSection />
                </Container>
            </div>
        </Layout>
    );
};

export default BlogPage;
