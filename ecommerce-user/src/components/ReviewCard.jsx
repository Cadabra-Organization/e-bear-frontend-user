import { AvatarCustom, AvatarFallback, UserIcon } from "./CustomTag";
import Rating from '@mui/material/Rating';
import "./ReviewCard.css";

const ReviewCard = ({rate, title, context, name, date}) => {
    return (
        <div className="border-line">
            <div>
                <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly/>
                <h2>{title}</h2>
                <h4>{context}</h4>
            </div>
            
            <div className="profile-sector">
                <AvatarCustom className="profile-avatar h-5 w-5">
                    <AvatarFallback className="avatar-fallback">
                        <UserIcon className="avatar-icon" />
                    </AvatarFallback>
                </AvatarCustom>
                <div className="profile-text-info">
                    <span className="profile-name">{name}</span>
                    <span className="profile-name">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard