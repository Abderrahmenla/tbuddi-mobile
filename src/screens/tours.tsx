import TourCard from "~/components/tour-card"
export default function Tours() {
    const tours = [
        {
            id: "dsfqsdf",
            name: "Dunbe Park",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
            images: [
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1609973010723-fc9c81a06fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
                "https://images.unsplash.com/photo-1600714480856-dc99b28892eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRvdXJzJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1584870960521-bfbf464c1940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            ],
            price: "20000",
            time: "1h",
        },
        {
            id: "sdfg",
            name: "Petrovaradinskoj Tvrdjavi",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
            images: [
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1609973010723-fc9c81a06fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
                "https://images.unsplash.com/photo-1600714480856-dc99b28892eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRvdXJzJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1584870960521-bfbf464c1940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            ],
            price: "20000",
            time: "2h",
        },
        {
            id: "fgsdfg",
            name: "Limanski Park",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
            images: [
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1609973010723-fc9c81a06fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
                "https://images.unsplash.com/photo-1600714480856-dc99b28892eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRvdXJzJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1584870960521-bfbf464c1940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            ],
            price: "20000",
            time: "1h",
        },
        {
            id: "gsdfgfff",
            name: "Antun Memorial Park",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
            images: [
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1609973010723-fc9c81a06fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
                "https://images.unsplash.com/photo-1600714480856-dc99b28892eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRvdXJzJTIwZ3VpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=360&q=60",
                "https://images.unsplash.com/photo-1584870960521-bfbf464c1940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80",
            ],
            price: "20000",
            time: "1h",
        },
    ]
    return (
        <section>
            {tours.map((tour, index) => (
                <TourCard key={index} {...tour} />
            ))}
        </section>
    )
}
