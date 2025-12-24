type CardProps = {
    title: string;
    image: string;
    className?: string;
}

const Card = ({ title, image, className }: CardProps) => (
    <div
        className={`relative rounded-3xl overflow-hidden min-h-55 lg:min-h-75 bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${image})` }}
    >
        <h3 className="absolute top-6 left-6 text-xl font-bold bg-white px-4 py-2 rounded-xl">
            {title}
        </h3>
    </div>
)
export default function SectionCollage() {
    return (
        <section className="pb-10">
            <div className="bg-blue-100 lg:px-auto py-10 lg:py-20 rounded-4xl mx-6 lg:mx-15 xl:mx-60">
                <h2 className="text-center text-2xl lg:text-5xl font-extrabold mb-12">
                    BROWSE BY DRESS STYLE
                </h2>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card
                        title="Casual"
                        image="/images/casual.png"
                        className="lg:col-span-1"
                    />

                    <Card
                        title="Formal"
                        image="/images/formal.png"
                        className="lg:col-span-2"
                    />

                    <Card
                        title="Party"
                        image="/images/party.png"
                        className="lg:col-span-2"
                    />

                    <Card
                        title="Gym"
                        image="/images/gym.png"
                        className="lg:col-span-1"
                    />
                </div>
            </div>
        </section>
    )
}