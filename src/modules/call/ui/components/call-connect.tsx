interface Props {
  meetingId: string;
  meetingName: string;
  userId: string;
  userName: string;
  userImage: string;
}

export function CallConnect({
  meetingId,
  meetingName,
  userId,
  userName,
  userImage,
}: Props) {
  return (
    <div>
      Call Connect
      <p>{meetingName}</p>
      <p>{meetingId}</p>
      <p>{userId}</p>
      <p>{userName}</p>
      <p>{userImage}</p>
    </div>
  );
}
