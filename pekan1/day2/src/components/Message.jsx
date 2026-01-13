function Message({ unreadmsg}) {
  return (
    <div className="mt-2">
      {unreadmsg.length > 0 && (
        <p className="inline-block text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded">
          Anda memiliki {unreadmsg.length} pesan
        </p>
      )}
    </div>
  );
}

export default Message;
