import notification from '@/utils/NotificationManager.ts';

const MAX_SIZE = 3 * 1024 * 1024;
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

export const validateUploadFile = (file: File): boolean => {
    if (!EXTENSIONS.includes(file.name.split('.')[1])) {
        notification.showError('Should choose (.jpg, .jpeg, .png, .webp) file');
        return false;
    }
    if (file.size > MAX_SIZE) {
        notification.showError('Should choose a file less 3Mb');
        return false;
    }
    return true;
};
