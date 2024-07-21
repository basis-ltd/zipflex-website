import { Controller, FieldValues, useForm } from 'react-hook-form';
import Input from '../../components/inputs/Input';
import { InputErrorMessage } from '../../components/feedback/ErrorLabels';
import Button from '../../components/inputs/Button';
import { useState } from 'react';
import Loader from '../../components/inputs/Loader';

const ContactSection = () => {
  // REACT HOOK FORM
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // STATE VARIABLES
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // HANDLE FORM SUBMISSION
  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset({
        name: '',
        phone: '',
        email: '',
        attachment: null,
      });
      setAttachment(null);
      setIsSuccess(true);
    }, 1000);
    return data;
  };

  return (
    <main className="contact-section flex w-full flex-col gap-4 h-[88vh] text-white">
      <section className="w-[75%] mx-auto flex flex-col gap-12 h-full justify-center">
        <h1 className="text-3xl font-bold">Contact us</h1>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="grid grid-cols-2 gap-12 w-full">
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => {
                return (
                  <label className="flex flex-col gap-1 w-full">
                    <Input
                      placeholder="Name"
                      label="Name"
                      required
                      {...field}
                    />
                    {errors?.name && (
                      <InputErrorMessage message={errors?.name?.message} />
                    )}
                  </label>
                );
              }}
            />
            <Controller
              name="phone"
              rules={{ required: 'Phone is required' }}
              control={control}
              render={({ field }) => {
                return (
                  <label className="w-full flex flex-col gap-1">
                    <Input
                      placeholder="Phone"
                      label="Phone"
                      required
                      {...field}
                    />
                    {errors?.phone && (
                      <InputErrorMessage message={errors?.phone?.message} />
                    )}
                  </label>
                );
              }}
            />
            <Controller
              name="email"
              rules={{ required: 'Email is required' }}
              control={control}
              render={({ field }) => {
                return (
                  <label className="w-full flex flex-col gap-1">
                    <Input
                      placeholder="Email"
                      label="Email"
                      required
                      {...field}
                    />
                    {errors?.email && (
                      <InputErrorMessage message={errors?.email?.message} />
                    )}
                  </label>
                );
              }}
            />
            <Controller
              name="attachment"
              control={control}
              render={({ field }) => {
                return (
                  <label className="w-full flex flex-col gap-3">
                    <p>Attachment</p>
                    <Input
                      type="file"
                      label="Attachment"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        if (e.target.files) {
                          setAttachment(e.target.files[0]);
                        }
                      }}
                    />
                    {attachment && (
                      <p className="text-[14px] text-green-700 text-lg font-bold">
                        {attachment.name} attached
                      </p>
                    )}
                  </label>
                );
              }}
            />
          </fieldset>
          <Button submit primary className="!h-[6vh] px-12 text-xl align-end">
            {isLoading ? <Loader /> : 'Send message'}
          </Button>
          {isSuccess && (
            <p className="text-lg text-green-700 text-center font-bold">
              Message sent successfully
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default ContactSection;
