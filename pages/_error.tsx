import { NextPageContext } from 'next';

type Props = {
  statusCode: number | undefined;
};

const Error = ({ statusCode }: Props): JSX.Element => {
  return (
    <p>
      {statusCode
        ? `A ${statusCode} error occurred on the server`
        : 'An error occurred on the client'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode: number | undefined = res
    ? res.statusCode
    : err
    ? err.statusCode
    : 404;
  return { statusCode };
};

export default Error;
