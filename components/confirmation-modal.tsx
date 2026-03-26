import { X } from 'lucide-react-native';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface ConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal({
  isVisible,
  onClose,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  return (
    <Modal visible={isVisible} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 items-center justify-center bg-black/50 px-6">
        <View className="w-full rounded-3xl bg-white p-6 shadow-xl">
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} className="absolute right-4 top-4">
            <X size={24} color="#CBD5E1" />
          </TouchableOpacity>

          {/* Content */}
          <View className="items-center py-4">
            <Text className="text-center text-2xl font-semibold leading-8 text-[#475569]">
              Are you sure about marking{'\n'}your shop unavailable?
            </Text>
          </View>

          {/* Actions */}
          <View className="mt-4 flex-row gap-x-4">
            <TouchableOpacity
              onPress={onCancel}
              className="flex-1 items-center justify-center rounded-xl border-2 border-[#FF8C00] py-4">
              <Text className="text-xl font-bold text-[#FF8C00]">No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              className="flex-1 items-center justify-center rounded-xl bg-[#FF8C00] py-4">
              <Text className="text-xl font-bold text-white">Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
