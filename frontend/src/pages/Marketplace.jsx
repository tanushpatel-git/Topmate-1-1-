    import React from "react";
    import Navbar from "../components/commonCompo/Navbar";
    import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
    import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
    import SearchBar from "../components/MarketPlaceComponent/SearchBar";

    const Marketplace = () => {

        const detailsOfDeveloper = [
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            name: "Tanush Patel",
            role: "Software Developer",
            rating: 5,
            reviews: 10,
            price: 100,
            duration: "1 hour",
            mentor: "Tanush Patel",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

        return (
            <>
                <Navbar />
                <CategoryNavbar />
                <DetailsCardArea 
                detailsOfDeveloper={detailsOfDeveloper}
                />
                <SearchBar />
            </>
        );
    };
    export default Marketplace;
