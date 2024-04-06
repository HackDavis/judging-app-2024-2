import AdminProtected from '@components/AdminProtected/AdminProtected';

export default function Admin() {
  return (
    <AdminProtected
      loadingDisplay={'loading...'}
      failDisplay={"you aren't the admin 😡"}
    >
      hi, this is the super cool admin page
    </AdminProtected>
  );
}
