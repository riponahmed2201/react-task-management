
type errorMgs = {
  message: string;
};

const ErrorMessage = ({ message }: errorMgs) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <p className="text-[red]">{message}</p>
    </div>
  );
};

export default ErrorMessage;
