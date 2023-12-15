import toast from 'react-hot-toast';

export function toastHelper<T>(
  promises: Promise<T>,
  name: string,
  action: 'create' | 'update' | 'delete'
): void {
  const actionVerb = action.charAt(0).toUpperCase() + action.slice(1);

  toast.promise(promises, {
    loading: `${actionVerb} ${name}...`,
    success: `${name} ${action}d!`,
    error: `Error ${action} ${name}`,
  });
}
