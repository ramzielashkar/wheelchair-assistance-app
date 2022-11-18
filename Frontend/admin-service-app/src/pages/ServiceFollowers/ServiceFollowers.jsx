import { CircularProgress } from "@mui/material";
import { useState } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useFollowers } from "../../query/ServiceFollowers/useFollowers";
const ServiceFollowers = ()=>{
      //getting followers
      const { data: followers, isLoading: isLoadingFollowers, isFetching: isFetchingFollowers, isFetched: fetched   } = useFollowers();
       // if followers aren't fetched yet
    if(isLoadingFollowers || isFetchingFollowers){
        return(
            <CircularProgress/>
        );
    }
    //if no followers
    if(fetched && followers?.followers.followers.length==0){
        return(
        <section className="flex column clients-section">
            <div className="clients-header flex">
                <p className="clients-title">Followers</p>
            </div>
            <EmptyState content={'No Followers'}/>
            </section>
        );
    }
    return(
        <section className="flex column clients-section">
            <div className="clients-header flex">
                <p className="clients-title">Followers</p>
            </div>

            <div className="clients-container">
            {followers?.followers?.followers?.map((follower)=>{
                return(
                <ServiceCard
                name={follower?.follower_id?.name}
                content={"follower"}
                photo={follower?.follower_id?.profile_picture}
                id={follower?.follower_id?._id}
                />
                )
            })}
            
            </div>
        </section>
    );
}
export default ServiceFollowers;